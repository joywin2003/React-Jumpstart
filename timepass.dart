import 'dart:convert';
import 'package:flutter/foundation.dart';
import 'package:flutter/material.dart';
import 'package:http/http.dart' as http;

void main() {
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      home: Scaffold(
        appBar: AppBar(
          title: const Text('Hive Data'),
        ),
        body: const HiveDataScreen(),
      ),
    );
  }
}

class HiveDataScreen extends StatefulWidget {
  const HiveDataScreen({Key? key}) : super(key: key);

  @override
  // ignore: library_private_types_in_public_api
  _HiveDataScreenState createState() => _HiveDataScreenState();
}


class _HiveDataScreenState extends State<HiveDataScreen> {
  List<Map<String, dynamic>> hiveData = [];

  @override
  void initState() {
    super.initState();
    fetchData();
  }

  Future<void> fetchData() async {
    try {
      final response = await http.get(Uri.parse('https://script.google.com/macros/s/AKfycbxFvAZwv3prFQW1otzwccE0V_6Dhgu8jV3TB5clun6R7TqHqFZdKoYK-B1hWpy1N0_lKA/exec'));

      if (response.statusCode == 200) {
        try {
          // Check if the response body is a valid JSON
          final dynamic jsonData = json.decode(response.body);

          if (jsonData is List) {
            setState(() {
              hiveData = List<Map<String, dynamic>>.from(jsonData);
            });
          } else {
            if (kDebugMode) {
              print('Invalid JSON format. Response: ${response.body}');
            }
          }
        } catch (e) {
          if (kDebugMode) {
            print('Error decoding JSON: $e');
          }
        }
      } else {
        if (kDebugMode) {
          print('Failed to load data. Status code: ${response.statusCode}');
        }
      }
    } catch (e) {
      if (kDebugMode) {
        print('Error fetching data: $e');
      }
    }
  }



  @override
  Widget build(BuildContext context) {
    return ListView.builder(
      itemCount: hiveData.length,
      itemBuilder: (context, index) {
        var data = hiveData[index];
        return ListTile(
          title: Text('Temperature: ${data['Hive Temperature( °C )']}°C'),
          subtitle: Text('Humidity: ${data['Hive Humidity( % )']}%'),
          // Add more details as needed
        );
      },
    );
  }
}
