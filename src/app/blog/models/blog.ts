import { Injectable } from '@angular/core'

export interface IBlogRemote{
 
   
     id:number
       
         
   
     name:string
       
         
   
     description:string
       
         
   
     userId:number
       
         
   
     createdAt:string
       
         
   
     avatar:string
       
         
   
     blogImage:string
       
         
   
     tags:string
       
         
   
     likes:number
       
         
            // instead of client_id for server purpose
            client_id: number
}

export interface IBlog{
     
 id:number
   
 name:string
   
 description:string
   
 userId:number
   
 createdAt:string
   
 avatar:string
   
 blogImage:string
   
 tags:string
   
 likes:number
   
}

export const BlogOdooFields =[
 
   
       
          'id,'
         


           
   
       
          'name,'
         


           
   
       
          'description,'
         


           
   
       
          'userId,'
         


           
   
       
          'createdAt,'
         


           
   
       
          'avatar,'
         


           
   
       
          'blogImage,'
         


           
   
       
          'tags,'
         


           
   
      'likes'
     
       


           
]

@Injectable()
export class Blog implements IBlog
  {
     
  public id:number
   
  public name:string
   
  public description:string
   
  public userId:number
   
  public createdAt:string
   
  public avatar:string
   
  public blogImage:string
   
  public tags:string
   
  public likes:number
   
      constructor() { }

  public static init(){
  let blog: IBlog= {
     
   
         
               
                 id: null,
                   
                     
   
         
               
                 name: null,
                   
                     
   
         
               
                 description: null,
                   
                     
   
         
               
                 userId: null,
                   
                     
   
         
               
                 createdAt: null,
                   
                     
   
         
               
                 avatar: null,
                   
                     
   
         
               
                 blogImage: null,
                   
                     
   
         
               
                 tags: null,
                   
                     
   
         
               
                 likes: null,
                   
                     

    }

return blog
  }
  

  public static getTableStructure()
{
  let structure: any = [
   
      { 'name': 'id', 'type': 'INTEGER PRIMARY KEY' },
     
      { 'name': 'name', 'type': 'TEXT' },
     
      { 'name': 'description', 'type': 'TEXT' },
     
      { 'name': 'userId', 'type': 'INTEGER' },
     
      { 'name': 'createdAt', 'type': 'TEXT' },
     
      { 'name': 'avatar', 'type': 'TEXT' },
     
      { 'name': 'blogImage', 'type': 'TEXT' },
     
      { 'name': 'tags', 'type': 'TEXT' },
     
      { 'name': 'likes', 'type': 'INTEGER' },
     

    ]
  return structure

}


}
