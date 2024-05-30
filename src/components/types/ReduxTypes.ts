
import type { HeaderRequest } from '../../components/types/Requests';

export type statusesHeaderResponse = 'idle' | 'loading' | 'succeeded' | 'failed';

export type InitialHeaderState = HeaderRequest & { status: statusesHeaderResponse, error: null | string | undefined };

export type RootState = {
    header: InitialHeaderState;
};
