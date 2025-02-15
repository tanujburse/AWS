import type { User } from '~features/authentication/types/user.type';
import type { ApiResponse } from '~core/types/api-response.type';

export type UpdateUserResponseData = {
  user: User;
};

export type UpdateUserResponse = ApiResponse<UpdateUserResponseData>;
