import jwt from 'jsonwebtoken'

const generateToken = (id) => {
  return jwt.sign({id},"A9MyJ934rfZnSRySYM0Unm7XcSZsWndsXETORmJY5e3jhqE2J7VDTJ2eQcQIzE1bG+zfLkULrfwgNvgMwMLWSt5/nF8cYEd/fvDfrQ5Vf/cQvojKThC7DG6oHJjMBvjM3yjqRrQWgK+ul1vE/3xV1nq8ftUehUyYQfCxdGUg3jGcaI2G7oXe5ZpgCn7YauQ02VwvAoU7TTtW3iBVcDlSoLC/39lgJa0288/tfc+td43Nvz/cnqvOeJwc/vsept6mCKJsWWQJmH6LA4aWwQqu5Hs3ddb//R76oLjIpxKo5suiFTJrZyauvKr4yHZIxiHj4VOIAaTsy4pEOGcaHbEfgQ==", {
    expiresIn: '90d'
  })
}

export default generateToken
