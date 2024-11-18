import Airtable from "airtable";

const base = new Airtable({apiKey: process.env.AIRTABLE_KEY}).base('appazEhgj3jhg8CxF');

type BaseSelectOption = {
    maxRecords: number,
    view: string,
    filterByFormula?: string
}

type GetAllWorkersParams ={
    filterByFormula?: string
}

type Worker = {
    worker_id: string;
    id: string;
    first_name: string;  // adjust as needed
    last_name: string;
    email: string;
    phone_number: string;
    hire_date: Date;
    job_title: "Programmer" | "Software Engineer" | "Frontend Developer" | "Backend Developer" | "Full Stack Developer" | "Mobile App Developer" | "DevOps Engineer" | "Cloud Architect" | "Systems Engineer" | "Automation Engineer" | "IT Support Specialist" | "Data Analyst" ;
    department: "Software Development" | "Product Management" | "Data and Analytics" | "Cloud and Infrastructure" | "Cybersecurity" | "Quality Assurance and Testing";  
    hourly_rate: number;
};

export const getAllWorkers = async ({ filterByFormula = undefined }: GetAllTasksParams): Promise<Worker[]> => {
    const baseSelectOptions: BaseSelectOption = {
        maxRecords: 50,
        view: "Grid view",
    };

    if (filterByFormula) {
        baseSelectOptions.filterByFormula = filterByFormula;
    }

    const workers: Worker[] = [];

    return new Promise((resolve, reject) => {
        base('Workers')
            .select(baseSelectOptions)
            .eachPage(
                function page(records, fetchNextPage) {
                    // Process each page of records.
                    records.forEach((record) => {
                        const workerRecord = {
                            id: record.getId(),
                            ...record.fields,
                        };

                        workers.push(workerRecord as Worker);
                    });

                    // Fetch the next page of records.
                    fetchNextPage();
                },
                function done(err) {
                    if (err) {
                        console.error(err);
                        reject(err);
                    } else {
                        // Resolve the promise with the fully populated array.
                        resolve(workers);
                    }
                }
            );
    });
};

type GetAllTasksParams ={
    filterByFormula?: string
}

type Task = {
    id: string;
    status: "Not ready" | "In progress" | "Completed";  // adjust as needed
    priority: "Low" | "Medium" | "High" | "Very important";  // adjust as needed
    created_at: string;
    TaskDescription: string;
    Assignments: string[];
    title: string;
    description: string;
    due_date: string;  
    estimated_hours: number;
};

export const getAllTasks = async ({ filterByFormula = undefined }: GetAllTasksParams): Promise<Task[]> => {
    const baseSelectOptions: BaseSelectOption = {
        maxRecords: 50,
        view: "Grid view",
    };

    if (filterByFormula) {
        baseSelectOptions.filterByFormula = filterByFormula;
    }

    const tasks: Task[] = [];

    return new Promise((resolve, reject) => {
        base('Tasks')
            .select(baseSelectOptions)
            .eachPage(
                function page(records, fetchNextPage) {
                    // Process each page of records.
                    records.forEach((record) => {
                        const taskRecord = {
                            id: record.getId(),
                            ...record.fields,
                        };

                        tasks.push(taskRecord as Task);
                    });

                    // Fetch the next page of records.
                    fetchNextPage();
                },
                function done(err) {
                    if (err) {
                        console.error(err);
                        reject(err);
                    } else {
                        // Resolve the promise with the fully populated array.
                        resolve(tasks);
                    }
                }
            );
    });
};

type GetAllAssignmentsParams ={
    filterByFormula?: string
}

type Assignment = {
    id: string;
    assignment_id: string;
    assignment_status: "TODO" | "DONE" ;
    Workers: string[];
    Tasks: string[];
    assigned_at: Date;
    completed_at: Date;
    Notifications: string[];
};

export const getAllAssignments = async ({ filterByFormula = undefined }: GetAllAssignmentsParams): Promise<Assignment[]> => {
    const baseSelectOptions: BaseSelectOption = {
        maxRecords: 50,
        view: "Grid view",
    };

    if (filterByFormula) {
        baseSelectOptions.filterByFormula = filterByFormula;
    }

    const assignments: Assignment[] = [];

    return new Promise((resolve, reject) => {
        base('Assignments')
            .select(baseSelectOptions)
            .eachPage(
                function page(records, fetchNextPage) {
                    // Process each page of records.
                    records.forEach((record) => {
                        const assignmentRecord = {
                            id: record.getId(),
                            ...record.fields,
                        };

                        assignments.push(assignmentRecord as Assignment);
                    });

                    // Fetch the next page of records.
                    fetchNextPage();
                },
                function done(err) {
                    if (err) {
                        console.error(err);
                        reject(err);
                    } else {
                        // Resolve the promise with the fully populated array.
                        resolve(assignments);
                    }
                }
            );
    });
};


