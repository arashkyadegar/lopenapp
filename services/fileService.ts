export class FileService {
  baseUrl: string = `${process.env.NEXT_PUBLIC_BASEURL}/api/uploads/`;
  async upload(formdata: any): Promise<any> {
    const response = await fetch(this.baseUrl, {
      method: "POST",
      credentials: "include",
      body: formdata,
    });
    // const repo = await response.json();
    // const result = await response.text();
    // console.log('err3')
    // console.log(response)
    // return JSON.stringify(repo);
    return response;
  }


  async uploadSingle(formdata: any): Promise<any> {
    const response = await fetch(this.baseUrl +'logo', {
      method: "POST",
      credentials: "include",
      body: formdata,
    });
    // const repo = await response.json();
    // const result = await response.text();
    // console.log('err3')
    // console.log(response)
    // return JSON.stringify(repo);
    return response;
  }
}
