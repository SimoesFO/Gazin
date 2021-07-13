import { format } from 'date-fns';
import IDeveloperView from '../interfaces/IDeveloperView';
import Developer from '../models/Developer';

export default {
  render(dev: Developer): IDeveloperView {
    return {
      id: dev.id,
      name: dev?.name,
      gender: dev?.gender,
      genderDescription: dev?.gender === 'M' ? 'Masculino' : 'Feminino',
      age: dev?.age,
      hobby: dev?.hobby,
      birthday: dev.birthday,
      birthdayDescription:
        typeof dev.birthday === 'string'
          ? (dev.birthday as string).split('-').reverse().join('/')
          : format(dev.birthday, 'dd/MM/yyyy'),
      createdAt: dev.createdAt
        ? format(dev.createdAt, 'yyyy-MM-dd HH:mm:ss')
        : dev.createdAt,
      updatedAt: dev.updatedAt
        ? format(dev.updatedAt, 'yyyy-MM-dd HH:mm:ss')
        : dev.updatedAt,
    };
  },

  renderMany(devs: Developer[]): IDeveloperView[] {
    return devs.map(dev => this.render(dev));
  },
};
