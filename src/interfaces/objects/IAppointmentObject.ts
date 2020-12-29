export default interface IAppointmentObject {
  id: string;
  date: string;
  formattedHour: string;
  user: {
    id: string;
    name: string;
    avatarUrl: string;
  };
}
