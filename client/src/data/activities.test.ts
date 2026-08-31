import { describe, expect, it } from "vitest";
import { activitiesForDate, activityDaysInMonth, paradiseActivities, upcomingActivityOccurrences } from "./activities";

describe("Paradise activity calendar", () => {
  it("preserves all eleven user-provided activity rules", () => {
    expect(paradiseActivities).toHaveLength(11);
    expect(paradiseActivities.find((item) => item.id === "new-year-gift")?.reward).toBe("$1,000");
    expect(paradiseActivities.find((item) => item.id === "chicken-rush")?.requirement).toBe("星球等級 6 以上");
  });

  it("matches recurring monthly dates", () => {
    expect(activitiesForDate(new Date(2026, 7, 25)).map((item) => item.id)).toContain("food-sale");
    expect(activitiesForDate(new Date(2026, 7, 28)).map((item) => item.id)).toContain("shooting-star");
    expect(activitiesForDate(new Date(2026, 7, 29)).map((item) => item.id)).toContain("meteor-defense");
    expect(activitiesForDate(new Date(2026, 7, 13)).map((item) => item.id)).toContain("chicken-rush");
  });

  it("handles annual Christmas ranges and invalid month days", () => {
    const santa = paradiseActivities.find((item) => item.id === "santa-space-flight")!;
    expect(activityDaysInMonth(santa, 2026, 12)).toHaveLength(23);
    expect(activitiesForDate(new Date(2026, 11, 24)).map((item) => item.id)).toContain("santa-delivery");
    expect(activitiesForDate(new Date(2026, 11, 25)).map((item) => item.id)).toContain("christmas-present");
    const facility = paradiseActivities.find((item) => item.id === "facility-sale")!;
    expect(activityDaysInMonth(facility, 2026, 2)).not.toContain(30);
  });

  it("returns chronological upcoming occurrences", () => {
    const upcoming = upcomingActivityOccurrences(new Date(2026, 7, 29), 4);
    expect(upcoming[0].activity.id).toBe("meteor-defense");
    expect(upcoming[1].activity.id).toBe("facility-sale");
    expect(upcoming.map((item) => item.date.getTime())).toEqual([...upcoming].map((item) => item.date.getTime()).sort((a, b) => a - b));
  });
});
