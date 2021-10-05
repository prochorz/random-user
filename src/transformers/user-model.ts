import {
    IsString
} from 'class-validator';
import {
    Expose,
    Transform
} from 'class-transformer';

export class UserModel {
    @Expose({ name: 'phone' })
    @IsString()
    public id!: string;

    @Expose()
    @IsString()
    public email!: string;

    @Expose()
    @IsString()
    @Transform((value) => value.obj.picture.thumbnail, { toClassOnly: true })
    public avatar!: string;

    @Expose()
    @IsString()
    @Transform((value) => value.obj.name.first, { toClassOnly: true })
    public firstName!: string;

    @Expose()
    @IsString()
    @Transform((value) => value.obj.name.last, { toClassOnly: true })
    public lastName!: string;

    @Expose()
    get fullName() {
        return `${this.lastName} ${this.firstName}`;
    }
}
