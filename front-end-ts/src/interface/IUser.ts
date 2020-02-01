




/* TODO: terminar*/
export interface IAdminUser{
    id: number,
    name: string,
    email: string,
    active: boolean,
    isAdmin: boolean
}
 export interface IDevInformation{
     name : string,
     gender : string,
     age : {
        day:string,
        month: string,
        year: string
     }
     country:string,
     state: string
 }

export interface IUser {
    id?: number,
    email?: string,
    name?: string,
    age?: string,
    gender?: string,
    country?: string,
    state?: string,
    header?: string,
    avatar?: string,
    feature?: string,
    cv_photo?: string,
    cv_studies?: string,
    cv_works?: string,
    cv_experience?: string,
    job_desired?: boolean,
    colaboration_desired?: boolean,
    likes?: number,
    seen?: number,
    isDeveloper?: boolean,
    outstanding?: boolean,
    ip?: string,
    last_visit?: string,
    active?: number
}
