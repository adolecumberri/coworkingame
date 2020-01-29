




/* TODO: terminar*/
export interface IAdminUser{
    id: number,
    name: string,
    email: string,
    active: boolean,
    isAdmin: boolean

}


export interface IUser {
    email: string,
    name: string,
    age?: number,
    gender?: string,
    id_country?: number,
    id_state?: number,
    id_social_media?: number,
    header?: string,
    feature?: string,
    cv_photo?: string,
    cv_stydies?: string,
    cv_work?: string,
    cv_experience?: string,
    job_desired?: boolean,
    colaboration_desired?: boolean,
    likes?: number,
    seen?: number,
    developer?: boolean,
    avatar?: string,
    outstanding?: boolean,
    ip?: string,
    isAdmin?: boolean,
    last_visit?: string,
    active?: boolean
}
