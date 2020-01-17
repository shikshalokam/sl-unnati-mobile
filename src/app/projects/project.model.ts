export interface Project
		{
			id : string,
			title: string,
			goal: string,
			organisation: string,
			duration: string,
			difficultyLevel: string,
			lastSync : Date,
			primaryAudience: string[],
			concepts: string[],
			keywords: string[],
            tasks : [{ id:string,
                projectId:string,
                title:string,
                startDate:Date,
                endDate:Date,
                status: string,
                assignedTo:string[],
                lastSync : Date,
                subTasks : [{
                    id:string,
                    taskId:string,
                    title:string,
                    startDate:Date,
                    endDate:Date,
                    status: string,
                    lastSync : Date,
                    assignTo:string[]

                }]}]
        }
        export interface Subtasks
                {
                    id:string,
                    taskId:string,
                    title:string,
                    startDate:Date,
                    endDate:Date,
                    status: string,
                    lastSync : Date,
                    assignTo:string[]

                }
        export interface Tasks
            {
                id:string,
                projectId:string,
                title:string,
                startDate:Date,
                endDate:Date,
                status: string,
                assignedTo:string[],
                lastSync : Date,
                subTasks : Subtasks[]
            }