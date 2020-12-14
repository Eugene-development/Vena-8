export default function ({redirect, $auth} ) {
  // If the user is not authenticated
  if (!$auth.loggedIn) {
    console.log('Нет доступа!');
    console.log($auth.loggedIn)
    return redirect('/admin/login')
  }
}
