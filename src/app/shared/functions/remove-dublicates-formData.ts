export function removeDuplicateKeys(formData: FormData): FormData {
    const seenKeys = new Set(); // To keep track of keys seen
    const formDataWithoutDuplicates = new FormData();
    
    formData.forEach((value, key) => {
        if (!seenKeys.has(key)) { // If the key hasn't been seen before
            seenKeys.add(key); // Add it to the set of seen keys
            formDataWithoutDuplicates.append(key, value); // Append to new FormData
        }
    });
    
    return formDataWithoutDuplicates;
}