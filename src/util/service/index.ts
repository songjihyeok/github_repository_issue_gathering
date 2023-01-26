export const DEFAULT_NULLISH = "-";

const service = {
     getValue: (
          // eslint-disable-next-line
          obj: any | undefined,
          key: string,
          // eslint-disable-next-line
          defaultValue?: any
          // eslint-disable-next-line
     ): any => {
          if (!obj || !key) {
               return defaultValue;
          }

          const keys = key.split(".");
          let value = obj;
          for (let i = 0, len = keys.length; i < len; i += 1) {
               const newValue = value[keys[i]];
               if (
                    !newValue &&
                    typeof newValue !== "number" &&
                    typeof newValue !== "boolean"
               ) {
                    return defaultValue;
               }
               value = newValue;
          }
          return value;
     }
};

export default service;
