import { AxiosConfig } from '@/lib/axios';
import { ILoginDto } from '../dto';
import { ILoginRes } from '../response';

class AuthApi extends AxiosConfig {
  private readonly _baseURL = '/auth';

  async postLogin(dto: ILoginDto) {
    return await this.post<ILoginRes, ILoginDto>({ url: `${this._baseURL}/login`, data: dto });
  }

  async postLogout() {
    // return await this.post<{}, {}>({ url: `${this._baseURL}/logout`, data: {} });
  }
}

export default new AuthApi();
