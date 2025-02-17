import {
  DeleteResult,
  ExecutionContext,
  ListResult,
  Pagination,
  SaveResult,
} from "../../core/platform/framework/api/crud-service";
import { CRUDService } from "../../core/platform/framework/api/crud-service";
import { TwakeServiceProvider, Initializable } from "../../core/platform/framework/api";
import { ApplicationPrimaryKey, PublicApplication } from "./entities/application";
import { CompanyExecutionContext } from "./web/types";
import {
  CompanyApplicationPrimaryKey,
  CompanyApplicationWithApplication,
} from "./entities/company-application";

export interface ApplicationServiceAPI extends TwakeServiceProvider, Initializable {
  applications: MarketplaceApplicationServiceAPI;
  companyApplications: CompanyApplicationServiceAPI;
}

export interface MarketplaceApplicationServiceAPI
  extends TwakeServiceProvider,
    Initializable,
    CRUDService<PublicApplication, ApplicationPrimaryKey, ExecutionContext> {
  listDefaults<ListOptions>(
    pagination?: Pagination,
    options?: ListOptions,
    context?: ExecutionContext,
  ): Promise<ListResult<PublicApplication>>;
}

export interface CompanyApplicationServiceAPI
  extends TwakeServiceProvider,
    Initializable,
    CRUDService<
      CompanyApplicationWithApplication,
      CompanyApplicationPrimaryKey,
      CompanyExecutionContext
    > {
  initWithDefaultApplications(companyId: string, context: CompanyExecutionContext): Promise<void>;

  save<SaveOptions>(
    item: Pick<CompanyApplicationPrimaryKey, "company_id" | "application_id">,
    _?: SaveOptions,
    context?: CompanyExecutionContext,
  ): Promise<SaveResult<CompanyApplicationWithApplication>>;

  get(
    item: Pick<CompanyApplicationPrimaryKey, "company_id" | "application_id">,
    context?: CompanyExecutionContext,
  ): Promise<CompanyApplicationWithApplication>;

  delete(
    item: Pick<CompanyApplicationPrimaryKey, "company_id" | "application_id">,
    context?: CompanyExecutionContext,
  ): Promise<DeleteResult<CompanyApplicationWithApplication>>;
}
