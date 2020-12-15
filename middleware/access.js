export default function ({redirect, $auth} ) {
  // If the user is not authenticated
  let $status = $auth.user.id;
  if (!$auth.loggedIn || $status !== 1) {
    console.log('Нет доступа!');
    console.log($auth.loggedIn)
    return redirect('/admin/login')
  }
}
