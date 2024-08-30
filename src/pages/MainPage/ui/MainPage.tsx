import { TableComponent } from '@widgets/Table';
import styles from './MainPage.module.scss';
import { ContainerWrapper } from '@shared/ui/ContainerWrapper';

export const MainPage = () => {
  console.log(document.documentElement.clientHeight / 50);
  return (
    <div className={styles.container}>
      <ContainerWrapper>
        <TableComponent />
      </ContainerWrapper>
    </div>
  );
};
