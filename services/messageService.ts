export class MessageService {
  baseUrl: string = `${process.env.NEXT_PUBLIC_BASEURL}/api/messages/sendEmail`;
  async sendEmail(message: any): Promise<any> {
    const response = await fetch(this.baseUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify(message),
    });
    // const repo = await response.json();
    // const result = await response.text();
    // console.log('err3')
    // console.log(response)
    // return JSON.stringify(repo);
    return response;
  }

  async uploadSingle(formdata: any): Promise<any> {
    const response = await fetch(this.baseUrl + "logo", {
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
