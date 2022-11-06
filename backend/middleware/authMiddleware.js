import jwt from 'jsonwebtoken'
import User from '../models/userModel.js'
import asyncHandler from 'express-async-handler'

const safe = asyncHandler(async (req,res,next) => {

  let token

  if(req.headers.authorization && req.headers.authorization.startsWith('Bearer')){
    try {
      token = req.headers.authorization.split(' ')[1]
      const decoded = jwt.verify(token,"A9MyJ934rfZnSRySYM0Unm7XcSZsWndsXETORmJY5e3jhqE2J7VDTJ2eQcQIzE1bG+zfLkULrfwgNvgMwMLWSt5/nF8cYEd/fvDfrQ5Vf/cQvojKThC7DG6oHJjMBvjM3yjqRrQWgK+ul1vE/3xV1nq8ftUehUyYQfCxdGUg3jGcaI2G7oXe5ZpgCn7YauQ02VwvAoU7TTtW3iBVcDlSoLC/39lgJa0288/tfc+td43Nvz/cnqvOeJwc/vsept6mCKJsWWQJmH6LA4aWwQqu5Hs3ddb//R76oLjIpxKo5suiFTJrZyauvKr4yHZIxiHj4VOIAaTsy4pEOGcaHbEfgQ==")
      req.user = await User.findById(decoded.id).select('-password')
      next();
    }catch(err) {
      res.status(401).json('Not authorized')
    }
  }
  else {
    res.status(401).json('Not authorized')
  }
})

const admin = asyncHandler(async (req,res,next) => {
  const {email} = req.body
  const user = await User.findOne({email:email})
  if(user && user.isAdmin) {
    next()
  }
  else {
    res.status(401)
    throw new Error('Not authorized')
  }
})

export {safe,admin}
