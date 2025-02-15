import type { User } from '~features/authentication/types/user.type';
import type { ApiResponse } from '~core/types/api-response.type';

export type CatchPokemonResponseData = {
  user: User;
};

export type CatchPokemonResponse = ApiResponse<CatchPokemonResponseData>;
