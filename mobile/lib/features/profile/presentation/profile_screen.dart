import 'package:flutter/material.dart';

class ProfileScreen extends StatelessWidget {
  const ProfileScreen({super.key});

  @override
  Widget build(BuildContext context) {
    return ListView(
      padding: const EdgeInsets.all(16),
      children: const [
        ListTile(title: Text('Notification Frequency'), subtitle: Text('High / Medium / Low')),
        ListTile(title: Text('Silent Hours'), subtitle: Text('22:00 - 07:00')),
      ],
    );
  }
}
