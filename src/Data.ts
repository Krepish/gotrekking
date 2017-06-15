import { User } from "./app/models";
export let initialUsers: Array<User> = [
    new User("pushkar@mail","pushkar",1,"Павел","Пушкарь"),
    new User("suvorov@mail","suvorov",2,"Иван","Суворов"),
    new User("messner@mail","messner",3,"Рейнхольд","Месснер")
];


    // {
    //     "userName":"Райнхолд",
    //     "userSurname":"Месснер",
    //     "email":"messner@mail",
    //     "password":"messner",
    //     "id":3
    // }