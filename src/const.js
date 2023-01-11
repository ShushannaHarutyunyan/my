import { v4 as uuidv4 } from 'uuid';
import User from './components/User/User';
 export const posts = [{
    id:uuidv4(),
    createdAt:'2022-12-15',
    userId:'me',
    title:'New from sport',
    comments:[
      {id:uuidv4(),
      userId:'user-1',
      text:'text used in laying out print',
      createdAt:'2022-12-15'},
      {id:uuidv4(),
         userId:'user-2',
         text:'dummy text used in laying out print',
         createdAt:'2022-12-16'},
   ],
    text:'Lorem ipsum, or lipsum as it is sometimetext used in laying out print, lipsum as it is sometimes knos known, is dummy text used in laying out print, lipsum as it is sometimes known, is dummy text used in laying out prin graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Ciceros De Finibus Bonorum et Malorum for use in a type specimen book. It usually begins with',
    category:'Sport',
    modifiedAt: null,    
 },
 {
   id:uuidv4(),
   createdAt:'2022-12-15',
  userId:'user-1',
   title:'Oscar filmes 2022',
   comments:[{}],
   text:'Lorem ipsum, or lipsum as it is lipsum as it is sometimes known, is dummtext used in laying out print, lipsum as it is sometimes knoy text used in laying out prin laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Ciceros De Finibus Bonorum et Malorum for use in a type specimen book. It usually begins with',
   category:'Holliwood',
   modifiedAt:'2022-12-17'    
},
{
   id:uuidv4(),
   createdAt:'2022-12-01',
  userId:'user-2',
   title:'Fashon',
   comments:[
       {id:uuidv4(),
      userId:'user-1',
      text:'dummy text used in laying out print',
      createdAt:'2022-12-15'},
   ],
   text:'Lorem ipsum, or lipsum as it is sometimes known, is dummy ttext used in laying out print, lipsum as it is sometimes knotext used in laying out print, lipsum as it is sometimes knotext used in laying out print, lipsum as it is sometimes knoext used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Ciceros De Finibus Bonorum et Malorum for use in a type specimen book. It usually begins with',
   category:'Fashion',
   modifiedAt:null,   
}
]
export const users=[{
   id:'me',
   name:'tast_name',
   surname:'test_surname'
},
{
   id:'user-1',
   name:'tast_name_1',
   surname:'test_surname_1'
},
{
   id:'user-2',
   name:'tast_name_2',
   surname:'test_surname_2'
}
];

export const LogInUser = 'me';