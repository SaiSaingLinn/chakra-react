export const ToDoRequest = (type:any) => ({ type })
export const ToDoError = (type:any, error:any) => ({ type, error })
export const ToDoSuccess = (type:any, data:any) => ({ type, data})