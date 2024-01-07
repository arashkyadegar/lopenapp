export class FileService {
     baseUrl: string = `${process.env.NEXT_PUBLIC_BASEURL}/api/uploads/`;
     async upload(formdata: any): Promise<any> {
       const requestOptions = {
         method: "POST",
         body: formdata,
       };
   
       const res = await fetch(this.baseUrl, requestOptions);
       const repo = await res.json();
       return JSON.stringify(repo);
     }
   }
   