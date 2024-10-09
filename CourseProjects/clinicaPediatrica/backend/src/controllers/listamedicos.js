import {
    returnListOfDoctors
} from "../services/returnDoctors.js";

returnListOfDoctors

async function medicalList(req, res) {
    const listDoctors = await returnListOfDoctors();

    res.json(listDoctors);
}

export { medicalList }