import { ArgumentMetadata, PipeTransform } from '@nestjs/common';
export declare class ValidateObjectID implements PipeTransform<string> {
    transform(value: string, metadata: ArgumentMetadata): Promise<string>;
}
