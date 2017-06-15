export class Tour {
    tourName: string;
    direction: string;
    activities: Array<string>;
    startDate: string;
    endDate: string;
    price: number;
    image: string;
    description: string;
}

export class Item{
    constructor(public tour: Tour,
            public dateOfOrder: number,
            public confirmation: boolean,
            public dateOfPurchase?: number
    ){
        this.tour = tour; 
       // this.dateOfOrder = Date.now();
        this.confirmation = confirmation;
        this.dateOfPurchase = dateOfPurchase || null;
    }
}

export class User{
       constructor(public email:string, 
                public password: string,    
                public id?: number,
                public userName?: string,
                public userSurname?: string,
                public cart?: Item[],
                public tours?: Item[]){
        this.email = email;
        this.password = password;
        this.id = id;
        this.userName = userName;
        this.userSurname = userSurname;
        this.cart = cart || [] ;
        this.tours = tours || [];
    };
}