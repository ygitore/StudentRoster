
import { StudentList } from "./student/StudentList.js";
import { getStudents } from "./student/StudentProvider.js";
import { CohortList } from "./cohort /cohortList.js";
import { getCohorts } from "./cohort /cohortProvider.js";


getCohorts().then(CohortList)
getStudents().then(StudentList)