import { IUserListRes } from '../response';
import { IUserListDto } from '../dto';
import { AxiosConfig } from '@/lib/axios';

class UserApi extends AxiosConfig {
  private readonly _baseURL = '/user';

  async getUserList(dto: IUserListDto) {
    const { page } = dto;

    return await this.get<IUserListRes, null>({ url: `${this._baseURL}?page=${page}` });
  }
}

export default new UserApi();
