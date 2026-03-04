import 'package:flutter/material.dart';

class SearchScreen extends StatefulWidget {
  const SearchScreen({super.key});

  @override
  State<SearchScreen> createState() => _SearchScreenState();
}

class _SearchScreenState extends State<SearchScreen> {
  String query = '';
  @override
  Widget build(BuildContext context) {
    return Padding(
      padding: const EdgeInsets.all(16),
      child: Column(children: [
        TextField(
          decoration: const InputDecoration(prefixIcon: Icon(Icons.search), hintText: 'Search by keyword'),
          onChanged: (v) => setState(() => query = v),
        ),
        const SizedBox(height: 16),
        Expanded(child: Center(child: Text(query.isEmpty ? 'Start typing to search news' : 'Results for "$query"'))),
      ]),
    );
  }
}
