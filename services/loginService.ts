export class LoginService {
  baseUrl: string = `${process.env.NEXT_PUBLIC_BASEURL}/auth/login/`;

  async login(email: string, password: string, remember: string): Promise<any> {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: email,
        password: password,
        remember: remember,
      }),
    };

    const res = await fetch(this.baseUrl, requestOptions);
    const repo = await res.json();
    return JSON.stringify(repo);
  }
}
