export interface INote {
  id: number,
  title: string,
  priority: string,
  body: string
}

export interface IState {
  data: INote[],
  showRemoveNoteModal: boolean,
  selectedNoteId: number,
  showAddEditNoteModal: boolean,
  isAddMode: boolean,
  showAddEditNoteToast: boolean
}