export interface ICharacter {
    name: string,
    debutYear: number,
    debutFilm: string
}

export interface ErrorPacket {
    message: string,
    payload: Error
}

// export interface SuccessPacket {
//     message: string,
// }