import { Status } from '../../utils/enums/IStatus';

export interface Reservation {
  id?: number;
  nomeHospede: string;
  dataInicio: Date;
  dataFim: Date;
  quantidadePessoas: number;
  status?: Status;
}
