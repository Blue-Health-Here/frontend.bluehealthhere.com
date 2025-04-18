export const formatPACriteria = (paCriteria: string): any => {
    if (!paCriteria) return [];

    // Split the text based on double newlines first, then process each section
    const sections = paCriteria.split('\n\n').map((section: string) => section.split('\n').map(line => line.trim()).filter(line => line !== ''));

    return formatCriteriaArray(sections);
};

export const formatCriteriaArray = (arr: string[][]): { title: string; items: string[] }[] => {
    const result: { title: string; items: string[] }[] = [];
    let currentObj: { title: string; items: string[] } | null = null;

    arr.forEach((subArray) => {
        // Handle the case where the first line might be a title ending with a colon followed by a newline
        if (subArray.length > 0) {
            const firstLine = subArray[0];
            // Check if the first line contains a title (text followed by ":")
            if (firstLine.endsWith(':')) {
                // Treat the first line as a title and rest as items
                if (currentObj) result.push(currentObj);
                currentObj = { title: firstLine, items: subArray.slice(1) }; // First line is title, the rest are items
            } else if (currentObj) {
                // Otherwise, continue adding to the current section's items
                currentObj.items.push(...subArray);
            }
        }
    });

    // Ensure to push the last section if exists
    if (currentObj) result.push(currentObj);

    return result;
};
