interface IDeveloperView {
  id: string;
  name: string;
  gender: string;
  genderDescription: string;
  age: number;
  hobby: string;
  birthday: Date | string;
  birthdayDescription: string;
  createdAt: Date | string;
  updatedAt: Date | string;
}

export default IDeveloperView;
