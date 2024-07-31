// import React from 'react';
// import SkeletonTable from '@patternfly/react-core/dist/js/components/Skeleton/SkeletonTable';
// export const TableSketeton: React.FC = () => <SkeletonTable rowSize={10} columns={[ 'first', 'second' ]} />

// require("@/app/ui/skeletons/tableskeleton.css")
import styles from "./tableskeleton.module.css"
export default function TableSkeleton(){
    return(
        <div className="bg-black justify-center flex mt-8">
            <div className={styles.tableWrapper}>
            <table className={styles.table}>
                <thead>
                <tr>
                    <th>Employee ID</th>
                    <th>Employee Name</th>
                    <th>Employee City</th>
                    <th>Employee Salary</th>

                </tr>
                </thead>
                <tbody>
                <tr>
                    <td className={styles.loading}>
                    <div className={styles.bar}></div>
                    </td>
                    <td className={styles.loading}>
                    <div className={styles.bar}></div>
                    </td>
                    <td className={styles.loading}>
                    <div className={styles.bar}></div>
                    </td>
                    <td className={styles.loading}>
                    <div className={styles.bar}></div>
                    </td>
                </tr>
                </tbody>
            </table>
            </div>
        </div>

    );
}