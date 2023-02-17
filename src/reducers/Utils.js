export function formateDob(dob) {
    dob = new Date(dob);
    return ('0' + dob.getDate()).slice(-2) + "/" + ('0' + (dob.getMonth() + 1)).slice(-2) + "/" + dob.getFullYear();
}