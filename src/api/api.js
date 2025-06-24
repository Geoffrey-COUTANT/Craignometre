const URL = "http://localhost:3000/craignometer";

export async function getEvents() {
  try {
    const response = await fetch(`${URL}/events_per_town`);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error("Error fetching events:", error);
    throw error;
  }
}