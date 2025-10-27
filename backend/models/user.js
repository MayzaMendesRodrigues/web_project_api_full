import mongoose from 'mongoose';
import validator from 'validator'

const urlRegex = /^https?:\/\/(?:www\.)?(?:[A-Za-z0-9](?:[A-Za-z0-9-]{0,61}[A-Za-z0-9])?\.)+[A-Za-z]{2,}(?:\/.*)?$/;

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 30,
    default: 'Jacques Cousteau'
  },
  about: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 30,
    default: 'Explorer'
  },
  avatar: {
    type: String,
    required: true,
    default: 'https://practicum-content.s3.us-west-1.amazonaws.com/resources/moved_avatar_1604080799.jpg',
    validate: {
      validator: (value) => urlRegex.test(value),
    },
    message: (props) => `${props.value} não é uma URL válida`,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    validate: {
      validator: validator.isEmail,
      message: 'Email invalido'
    }
  },

  password: {
type:String,
required:true,
select: false // nao retorna a senha
  }
});
const User = mongoose.model('user', userSchema);

export default User;
