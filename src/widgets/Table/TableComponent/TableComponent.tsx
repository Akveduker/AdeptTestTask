import { useSelector } from 'react-redux';
import { TableHeader } from '../TableHeader/TableHeader';
import { getTableState } from '@entities/Table';
import { TableItemComponent } from '../TableItem/ui/TableItem/TableItemComponent';
import styles from './TableComponent.module.scss';
import { Fragment, useState } from 'react';
import { ShowItemsOnScroll } from '@features/Table/ShowItemsOnScroll';
import { LoadItemsOnScroll } from '@features/Table/LoadItemsOnScroll';

export const TableComponent = () => {
  const { table } = useSelector(getTableState);
  const itemsToShow = 60;
  const [[startIndex, lastItemShownIndex], setShownItems] = useState([
    0,
    itemsToShow,
  ]);

  return (
    <div>
      <div className={styles.table}>
        <TableHeader />
        {table.map((item, i) => {
          return (
            <Fragment key={item.id}>
              {i % 60 === 0 && (
                <ShowItemsOnScroll
                  setPos={() => {
                    setShownItems([i - itemsToShow, i + itemsToShow]);
                  }}
                />
              )}
              <div>
                {i >= startIndex && i <= lastItemShownIndex ? (
                  <TableItemComponent {...item} />
                ) : (
                  <TableItemComponent key={item.id} {...item} isEmpty={true} />
                )}
              </div>
            </Fragment>
          );
        })}
      </div>
      <LoadItemsOnScroll />
    </div>
  );
};
