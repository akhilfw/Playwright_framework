
import { Page } from 'playwright';
export class LoginPage  {
    page: Page;
   
    constructor(page: any){
        this.page = page;
       
    }
    
    private get emailInput() { return this.page.locator("[name='email']"); }
    private get passwordInput() { return this.page.locator("[name='password']"); }
    private get loginButton() { return this.page.getByRole("button",{name:"Sign in"}); }
    private get dashboardElement() { return this.page.locator("//h1[contains(text(), 'Connect')]"); }
    private get errorPromptText() { return this.page.locator(".public_error__6yeUi"); }
    

    public async login(email: string , password: string): Promise<void> {
        await this.emailInput.waitFor();
        await this.emailInput.fill(email);
        await this.passwordInput.fill(password);
        
    }
    public async signIn():Promise<void>{

        await this.loginButton.click();
        //await this.dashboardElement.waitFor({ state: 'visible' });
    }

    public async navigate(url: string): Promise<void> {
        await this.page.goto(url);

    }

    public async validateDashboard(): Promise<string | null> {
        await this.dashboardElement.waitFor({ state: 'visible', timeout: 60000});
        return  this.dashboardElement.textContent();
      }

    public async getPromptText(): Promise<string | null> {
        await this.errorPromptText.waitFor({ state: 'visible' });
        return  this.errorPromptText.textContent();
      }

      

}


