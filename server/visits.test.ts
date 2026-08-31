import { beforeEach, describe, expect, it, vi } from "vitest";
import type { TrpcContext } from "./_core/context";

const dbMocks = vi.hoisted(() => ({
  getSiteVisitCount: vi.fn(),
  recordSiteVisit: vi.fn(),
}));

vi.mock("./db", () => dbMocks);

import { appRouter } from "./routers";

const caller = () => appRouter.createCaller({} as TrpcContext);

describe("visits router", () => {
  beforeEach(() => vi.clearAllMocks());

  it("returns the current global session count", async () => {
    dbMocks.getSiteVisitCount.mockResolvedValue(42);
    await expect(caller().visits.total()).resolves.toBe(42);
  });

  it("records a valid browser session and returns the new total", async () => {
    dbMocks.recordSiteVisit.mockResolvedValue(43);
    const input = { sessionId: "123e4567-e89b-42d3-a456-426614174000", entryPath: "/characters" };
    await expect(caller().visits.record(input)).resolves.toBe(43);
    expect(dbMocks.recordSiteVisit).toHaveBeenCalledWith(input.sessionId, input.entryPath);
  });

  it("rejects invalid session identifiers before database access", async () => {
    await expect(caller().visits.record({ sessionId: "not-a-uuid", entryPath: "/" })).rejects.toThrow();
    expect(dbMocks.recordSiteVisit).not.toHaveBeenCalled();
  });

  it("surfaces database failures to the client", async () => {
    dbMocks.getSiteVisitCount.mockRejectedValue(new Error("Database is not available"));
    await expect(caller().visits.total()).rejects.toThrow("Database is not available");
  });
});
