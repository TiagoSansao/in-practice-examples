import { EmployeeData } from './EmployeeData';

abstract class EmployeeSaver {
  public save(employeeData: EmployeeData): void {}
}
