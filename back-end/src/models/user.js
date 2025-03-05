const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Vui lòng nhập họ tên'],
    trim: true
  },
  email: {
    type: String,
    required: [true, 'Vui lòng nhập email'],
    unique: true,
    match: [
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
      'Vui lòng nhập email hợp lệ'
    ]
  },
  password: {
    type: String,
    required: [true, 'Vui lòng nhập mật khẩu'],
    minlength: 6,
    select: false
  },
  studentId: {
    type: String,
    trim: true
  },
  role: {
    type: String,
    enum: ['admin', 'librarian', 'student', 'teacher'],
    default: 'student'
  },
  phone: {
    type: String,
    trim: true
  },
  borrowedBooks: [
    {
      bookId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Book'
      },
      borrowDate: {
        type: Date,
        default: Date.now
      },
      dueDate: {
        type: Date,
        required: true
      },
      returned: {
        type: Boolean,
        default: false
      }
    }
  ],
  resetPasswordToken: String,
  resetPasswordExpire: Date,
  createdAt: {
    type: Date,
    default: Date.now
  }
});

// Mã hóa mật khẩu trước khi lưu
UserSchema.pre('save', async function(next) {
  if (!this.isModified('password')) {
    next();
  }
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

// Phương thức ký JWT
UserSchema.methods.getSignedJwtToken = function() {
  return jwt.sign({ id: this._id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRE
  });
};

// Phương thức so sánh mật khẩu
UserSchema.methods.matchPassword = async function(enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

module.exports = mongoose.model('User', UserSchema);
