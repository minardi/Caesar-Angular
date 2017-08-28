import { User } from '../../../common/models/user';

//I had to mock 'cause there are some trouble with requst to /users
export const USERS: User[] = [
    {
    	"id": 1,
    	"firstName": "Oleg",
    	"lastName": "Shvets",
    	"role": {
        	"id": 3,
        	"name": "teacher",
        	"roleCategory": {
            	"id": 2,
            	"name": "itacademy"
        	}
    	},
    	"nickName": "OlegShvets",
    	"image": null,
    	"location": {
        	"id": 1,
        	"name": "Dnipro"
    	}
	},
	{
    	"id": 2,
    	"firstName": "Dmytro",
    	"lastName": "Petin",
    	"role": {
        	"id": 4,
        	"name": "coordinator",
        	"roleCategory": {
            	"id": 2,
            	"name": "itacademy"
        	}
    	},
    	"nickName": "DmytroPetin",
    	"image": null,
    	"location": {
        	"id": 1,
        	"name": "Dnipro"
    	}
	},
	{
    	"id": 3,
    	"firstName": "Lucas",
    	"lastName": "Lukichich",
    	"role": {
        	"id": 5,
        	"name": "admin",
        	"roleCategory": {
            	"id": 2,
            	"name": "itacademy"
        	}
    	},
    	"nickName": "LukasLukichich",
    	"image": null,
    	"location": {
        	"id": 1,
        	"name": "Dnipro"
    	}
	},
	{
    	"id": 4,
    	"firstName": "Stefan",
    	"lastName": "Vendera",
    	"role": {
        	"id": 4,
        	"name": "coordinator",
        	"roleCategory": {
            	"id": 2,
            	"name": "itacademy"
        	}
    	},
    	"nickName": "SlavaUkr",
    	"image": null,
    	"location": {
        	"id": 1,
        	"name": "Dnipro"
    	}
	},
	{
    	"id": 5,
    	"firstName": "Kozak",
    	"lastName": "Kozachenko",
    	"role": {
        	"id": 3,
        	"name": "teacher",
        	"roleCategory": {
            	"id": 2,
            	"name": "itacademy"
        	}
    	},
    	"nickName": "Kozachok",
    	"image": null,
    	"location": {
        	"id": 1,
        	"name": "Chernivtsi"
    	}
	},
	{
    	"id": 6,
    	"firstName": "Petro",
    	"lastName": "Poroshenko",
    	"role": {
        	"id": 3,
        	"name": "teacher",
        	"roleCategory": {
            	"id": 2,
            	"name": "itacademy"
        	}
    	},
    	"nickName": "Roshenneprodam",
    	"image": null,
    	"location": {
        	"id": 1,
        	"name": "Kyiv"
    	}
	}
]