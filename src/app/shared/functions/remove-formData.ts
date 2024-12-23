export function removeFieldsFormData(formData) {
    for (const pair of formData.entries()) {
        const [key] = pair;
        formData.delete(key);
    }
    return formData;
}
