/* tslint:disable */
/* eslint-disable */
/**
 * 后台接口
 * 这是用于管理的博客后台接口 Powered by .NET 6.0.7 on WINDOWS
 *
 * OpenAPI spec version: The Current Version: Full-v1
 * Contact: me@zhaifanhua.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
import globalAxios, { AxiosResponse, AxiosInstance, AxiosRequestConfig } from 'axios';
import { Configuration } from '../configuration';
// Some imports not used depending on template conditions
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, RequestArgs, BaseAPI, RequiredError } from '../base';
/**
 * RootApi - axios parameter creator
 * @export
 */
export const RootApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @summary 初始化状态
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiRootPost: async (options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/root`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions :AxiosRequestConfig = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication Bearer required
            if (configuration && configuration.apiKey) {
                const localVarApiKeyValue = typeof configuration.apiKey === 'function'
                    ? await configuration.apiKey("Authorization")
                    : await configuration.apiKey;
                localVarHeaderParameter["Authorization"] = localVarApiKeyValue;
            }

            const query = new URLSearchParams(localVarUrlObj.search);
            for (const key in localVarQueryParameter) {
                query.set(key, localVarQueryParameter[key]);
            }
            for (const key in options.params) {
                query.set(key, options.params[key]);
            }
            localVarUrlObj.search = (new URLSearchParams(query)).toString();
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * RootApi - functional programming interface
 * @export
 */
export const RootApiFp = function(configuration?: Configuration) {
    return {
        /**
         * 
         * @summary 初始化状态
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiRootPost(options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<boolean>>> {
            const localVarAxiosArgs = await RootApiAxiosParamCreator(configuration).apiRootPost(options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
    }
};

/**
 * RootApi - factory interface
 * @export
 */
export const RootApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    return {
        /**
         * 
         * @summary 初始化状态
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiRootPost(options?: AxiosRequestConfig): Promise<AxiosResponse<boolean>> {
            return RootApiFp(configuration).apiRootPost(options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * RootApi - object-oriented interface
 * @export
 * @class RootApi
 * @extends {BaseAPI}
 */
export class RootApi extends BaseAPI {
    /**
     * 
     * @summary 初始化状态
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof RootApi
     */
    public async apiRootPost(options?: AxiosRequestConfig) : Promise<AxiosResponse<boolean>> {
        return RootApiFp(this.configuration).apiRootPost(options).then((request) => request(this.axios, this.basePath));
    }
}
